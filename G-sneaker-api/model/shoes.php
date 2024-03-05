<?php
    class Shoes {
        private $conn;
        private $table = 'shoes';

        public $id;
        public $name;
        public $image;
        public $price;
        public $description;
        public $color;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function read() {
            $query = 'SELECT * FROM ' . $this->table . ' ORDER BY id ASC';

            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            return $stmt;
        }

    }
?>