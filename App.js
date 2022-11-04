import Button from './Button'

const  App = ()=> {
    return <div>
    <h1> Useful Website</h1>
    <h3>Which website do you want to open?</h3>
    <Button name="Google" link="https://www.google.com/"/>
    <Button name="Twitch"/>
    <Button name="Git"/>
    <Button name="Youtube" link="https://www.youtube.com/"/>
    </div>
}

export default App