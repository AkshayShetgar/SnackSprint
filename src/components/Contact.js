const Contact = () => {
    return(
        <div className="m-3">
            <h1 className="font-bold text-lg">Contact Us</h1>
            <input className=" mr-2 border-2 border-black text-black" type="text" placeholder="Name"/>
            <input className="border-2 border-black" type="number" placeholder="Number"/>
            <button className="ml-2 rounded-md bg-green-400 font-semibold p-1">Submit</button>
            <p>Akshay Shetgar</p>
        </div>
    )
}

export default Contact;