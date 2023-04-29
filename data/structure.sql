CREATE TABLE IF NOT EXISTS products
(
  id INT NOT NULL AUTO_INCREMENT,
  promotion text NOT NULL,
  members TEXT NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB;