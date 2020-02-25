export class ChanelModel{
    constructor(private id?:number,private name?:string,private descriptio?:string,private startdate?:Date,private enddate?:Date,private logoPath?: string){}
    get Id() {
		return this.id;
	}
	set Id(id: number) {
		this.id = id;
	}
	get Name() {
		return this.name;
	}
	set Name(name: string) {
		this.name = name;
    }
    get Descriptio() {
		return this.descriptio;
	}
	set Descriptio(descriptio: string) {
		this.descriptio = descriptio;
    }
    get Startdate() {
		return this.startdate;
	}
	set Startdate(startdate: Date) {
		this.startdate = startdate;
	}
    get Enddate() {
		return this.enddate;
	}
	set Enddate(enddate: Date) {
		this.enddate = enddate;
	}
    get LogoPath() {
		return this.logoPath;
	}
	set LogoPath(logoPath: string) {
		this.logoPath = logoPath;
	}

}