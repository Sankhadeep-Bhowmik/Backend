function userForm(req,res){
    res.write(`
        <form action='/submit' method='post'>
        <input placeholder='enter your name' name='name'></input>
        <input placeholder='enter your email' name='email'></input>
        <button>Submit</button>
    </form>`)
    res.end();
}
module.exports= userForm;