import { useState, useRef } from "react";
const Header = () => {
    const playerName = useRef();
    const [getName, setName] = useState('Time Traveller');

    const handleClick = () => {
        console.log("hello")
        setName(playerName.current.value);
        playerName.current.value = "";
    }
    return (
        <header>
        <div class="container bg-dark my-5 py-3 rounded-5 h-25 w-75">
            <div class="row align-content-center justify-content-center">
                <div class="col">
                    <h1 class="display-5 syne-mono-regular text-center text-white"><span class="green">Embark
                            on The</span> <span class="text-light-emphasis">
                            Ultimate Time Quest</span></h1>
                    <p class="text-center green lead">Dive into captivating challenges and race against the clock
                    </p>
                        <p class="display-5  green freeman-regular fs-1 text-sm-center">Welcome, {getName}</p>
                </div>
                <div class="w-100"></div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <input ref={playerName} type="text" class="form-control btn-primary w-50" placeholder="Enter your name"
                            aria-label="Enter your name" aria-describedby="button-addon2"/>
                        <button  class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Set Name</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}
export default Header;