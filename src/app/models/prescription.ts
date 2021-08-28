export class Prescription{
    id: Number | any ;
    doctorId: Number | any ;
    patientId: Number | any ;
    dateAndTime: Date | any ;

    prescribedMedicines: PrescribedMedicine[] | any ;
    suggestion: string | any ;
}

export class PrescribedMedicine{
    id: Number | any ;
    medicineName: string | any ;
    otherInfo: string | any ;
    numberOfDaysToTake: number | any ;
    morning: boolean | any;
    noon: boolean | any;
    night: boolean | any;
    beforeEating: boolean | any ;
    afterEating: boolean | any;
}