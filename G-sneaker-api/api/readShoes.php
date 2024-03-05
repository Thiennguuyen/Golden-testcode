<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/db.php';
    include_once '../model/shoes.php';

    $database = new Database();
    $db = $database->connect();

    $shoes = new Shoes($db);

    $result = $shoes->read();
    $num = $result->rowCount();

    if ($num > 0) {
        $shoes_arr = array();
        $shoes_arr['data'] = array();

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $shoes_item = array(
                'id' => $id,
                'name' => $name,
                'image' => $image,
                'price' => $price,
                'description' => $description,
                'color' => $color
            );

            array_push($shoes_arr['data'], $shoes_item);
        }

        echo json_encode($shoes_arr);
    } else {
        echo json_encode(
            array('message' => 'No shoes found')
        );
    }
?>