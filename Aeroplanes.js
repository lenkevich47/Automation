// родительский класс
function Plane(name, weight, speed, rangeOfFlight) {
  this.name = name;
  this.weight = weight;
  this.speed = speed;
  this.rangeOfFlight = rangeOfFlight;
}

Plane.prototype.fly = function() {
  console.log(this.name + ' летит со скоростью ' + this.speed);
};

Plane.prototype.land = function() {
  console.log(this.name + ' приземляется');
};

// класс грузового самолёта
function CargoPlane(name, weight, speed, rangeOfFlight, cargoType, carringCapacity) {
  Plane.apply(this, arguments);
  this.cargoType = cargoType;
  this.carringCapacity = carringCapacity;
}

CargoPlane.prototype = Object.create(Plane.prototype);
CargoPlane.prototype.constructor = CargoPlane;

CargoPlane.prototype.loadCargo = function() {
  console.log(this.name + ' загружает груз типа ' + this.cargoType);
}

CargoPlane.prototype.unloadCargo = function() {
  console.log(this.name + ' выгружает груз типа ' + this.cargoType);
}

// класс пассажирского самолёта
function Airliner(name, weight, speed, rangeOfFlight, seatsNumber, exitsNumber) {
  Plane.apply(this, arguments);
  this.seatsNumber = seatsNumber;
  this.exitsNumber = exitsNumber;
}

Airliner.prototype = Object.create(Plane.prototype);
Airliner.prototype.constructor = Airliner;

Airliner.prototype.boardingPassengers = function() {
  console.log(this.name + ' посадка пассажиров количеством равным ' + this.seatsNumber);
}

Airliner.prototype.disembarkation = function() {
  console.log(this.name + ' высаживает пассажиров количеством равным ' + this.seatsNumber);
}

// класс авиакомпании
function Aircompany(name) {
  this.name = name;
  this.planes = [];
}

Aircompany.prototype.addPlane = function(plane) {
  this.planes.push(plane);
};
