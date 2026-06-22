<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$conn = new mysqli('localhost', 'root', '', 'brewhaven_coffee');
if ($conn->connect_error) die(json_encode(['success'=>false,'message'=>'DB error']));

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['cart'])) die(json_encode(['success'=>false,'message'=>'Cart kosong']));

$customer = $input['customer_name'] ?? 'Guest';
$total = array_sum(array_map(fn($i)=>$i['price']*$i['qty'], $input['cart']));
$orderCode = 'BRH-'.date('Ymd').'-'.rand(1000,9999);

$conn->begin_transaction();
try {
    $stmt = $conn->prepare("INSERT INTO orders (order_code, customer_name, total_amount) VALUES (?,?,?)");
    $stmt->bind_param("ssi", $orderCode, $customer, $total);
    $stmt->execute();
    $orderId = $conn->insert_id;
    $stmt->close();
    
    $stmt = $conn->prepare("INSERT INTO order_items (order_id, product_name, size, quantity, price) VALUES (?,?,?,?,?)");
    foreach ($input['cart'] as $item) {
        $stmt->bind_param("issii", $orderId, $item['name'], $item['size'], $item['qty'], $item['price']);
        $stmt->execute();
    }
    $conn->commit();
    echo json_encode(['success'=>true, 'order_code'=>$orderCode]);
} catch (Exception $e) {
    $conn->rollback();
    echo json_encode(['success'=>false, 'message'=>$e->getMessage()]);
}
$conn->close();
?>