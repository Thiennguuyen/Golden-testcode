<?php
    class Database {
        private $host = "bktke9cj7dfquw6toho6-mysql.services.clever-cloud.com";
        private $db_name = "bktke9cj7dfquw6toho6";
        private $username = "uvlgxduwio2qpmtd";
        private $password = "8IghvLTC0NuVdWQKBLG4";
        private $conn;

        public function connect() {
            $this->conn = null;

            try {
                $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                echo 'Connection Error: ' . $e->getMessage();
            }

            return $this->conn;
        }
    }
?>