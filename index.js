/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';
import { CuentaNomina } from './CuentaNomina.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

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

