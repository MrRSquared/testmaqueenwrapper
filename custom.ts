
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace WrappedMaqueen {
    /**
     * This is a simple wrapper for the Maqueen motor.
     * @param leftSpeed is the desired speed for the left wheel ranged from -1 to 1 
     * @param rightSpeed is the desired speed for the right wheel ranged from -1 to 1 
     * @param e describe parameter here
     */
    //% block setMotor()
    export function setMotor(leftSpeed: number, rightSpeed: number): void {
        let leftOutput = 0;
        let rightOutput = 0;
        //set the left Speed
        if (leftSpeed >= 0){
            leftOutput = ((Math.abs(leftSpeed)-(0))/1)*255;
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, leftOutput)
        } else if (leftSpeed <= 0){
            leftOutput = ((Math.abs(leftSpeed)-(0))/1)*255;
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, leftOutput)
        } else{
            DFRobotMaqueenPlus.mototStop(Motors.M1)
        }  
        //set the right speed
        if (rightSpeed >= 0){
            rightOutput = ((Math.abs(rightSpeed)-(0))/1)*255;
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, rightOutput)
        } else if (rightSpeed <= 0){
            rightOutput = ((Math.abs(rightSpeed)-(0))/1)*255;
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, rightOutput)
        } else{
            DFRobotMaqueenPlus.mototStop(Motors.M2)
        }  
    }
}
