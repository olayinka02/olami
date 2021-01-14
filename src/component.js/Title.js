import React, {Component} from 'react';

const TITLES=[
    "I'm a Web Developer",
    "I'm a Frontend Enginner",
    "I'm a UI/UX Developer",
    "I'm a Mathematician",
   
];

class Title extends Component {
    state={titleIndex:0 , fadeIn:true};

    componentDidMount() {
        this.timeout=setTimeout(() =>this.setState({ fadeIn: false}), 2000);
        this.animateTitles();
    }
    animateTitles = () =>{
        setInterval(() => {
            const titleIndex=(this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });

            this.timeout= setTimeout(() =>this.setState({ fadeIn: false}), 2000);
        },4000);
    }

    render(){
        const{ fadeIn, titleIndex }=this.state;


        const title=TITLES[titleIndex];

        return (
        <h4 className={fadeIn ? 'title-fade-in' : 'title-fade-out'} >{title}</h4>
        );
    }

}
 export default Title;