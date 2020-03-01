const info = ({ name, sir_name, msg }) => {
    return React.createElement("div", {id: "info"},
        [ 
            React.createElement("h2", {id: "Name"}, name),
            React.createElement("h2" , {id: "Sir_name"}, sir_name),
            React.createElement("h2", {id: "msgs"}, msg)
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},[
        React.createElement("h1",{},"Adopt Me!!"),
        React.createElement(info,{
            name:"Rocky",
            sir_name:"Wilson",
            msg:"Don't dare me"
        }),
        React.createElement(info,{
            name:"Bugga",
            sir_name:"Willamson",
            msg:"I dare you"
        }),
        React.createElement(info,{
            name:"Chomu",
            sir_name:"Richardson",
            msg:"who dare you"
        })
    ]);
};
    
ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
        );
        