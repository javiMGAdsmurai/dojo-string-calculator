export class StringCalculator {
    public static add(value:string): number {
        if(value === '') return 0

        const formattedValues = value.replaceAll('\n', ',')
        const arrayValues = formattedValues.split(',');

        let number = 0
        
        arrayValues.forEach(value => {
            number += Number(value)
        })

        return number
    }
}
