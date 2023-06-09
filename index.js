/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './Empleados/SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('12345');
console.log(SistemaAutenticacion.login(cliente,'12345'));

const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez','1234343',10000);
empleado.asignarClave('1234');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas','232344',12000);
gerente.asignarClave('12345');
console.log(SistemaAutenticacion.login(gerente,'12345'));

const director = new Director('Elena Moreno','232323',15000);
director.asignarClave('12345');
console.log(SistemaAutenticacion.login(director,'12345'));

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

















/*
const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001',0);
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002',0);

const CuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);
//const CuentaAhorroMaria = new CuentaAhorro(cliente,'9985','001',0);

//const cuentaSimple = new Cuenta(cliente,'098','001',100);
//console.log(cuentaSimple);

const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
console.log(cuentaNominaLeonardo);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());


console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(CuentaAhorroLeonardo);
CuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(CuentaAhorroLeonardo.verSaldo());
CuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(CuentaAhorroLeonardo.verSaldo()); 
*/
/*console.log(cuentaDeMaria);
cuentaDeMaria.depositoEnCuenta(900);
console.log(cuentaDeMaria.verSaldo());
cuentaDeMaria.retirarDeCuenta(80);
console.log(cuentaDeMaria.verSaldo());
console.log(CuentaAhorroMaria);
CuentaAhorroMaria.depositoEnCuenta(500);
console.log(CuentaAhorroMaria.verSaldo());
CuentaAhorroMaria.retirarDeCuenta(250);
console.log(CuentaAhorroMaria.verSaldo()); 
*/

