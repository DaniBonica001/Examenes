import react from "react"


export default class QuestionsBox extends react.Component{
    render(){
        const [components, setComponents] = useState(["Sample"])

        function addComponent() {
            setComponents([...components, "Sample"])
        }
        
        return (
            <div>
                <div>
                {components.map((item, i) => (<Question/>))}
                </div>
                <div>
                    <button type='btn' class='btn btn-secondary' onClick={addComponent}>Agregar pregunta (+)</button>
                </div>
            </div>
        )
    }
}