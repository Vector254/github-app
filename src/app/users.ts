export class Users {
    constructor(
    public login: string,
    public name: string,
    public email:string,
    public followers:number,
    public following:number,
    public public_repos:number,
    public avatar_url,
    public html_url
    ){}
}
