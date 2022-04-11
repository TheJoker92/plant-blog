export class Utils {
    static getIdPlantByURL(): number {
        //URL is slash separated and the last / is the id
        let args: string[] = window.location.href.split("/")
        return parseInt(args[args.length-1])
    }
}