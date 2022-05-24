import { Component, createRef,forwardRef,useState,useImperativeHandle } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref for controlling child component */}
            </>
        );
    }
};

const ChildComponent = forwardRef((props, ref) => {
  const [isActive, setActive] = useState(true);

  useImperativeHandle(ref, () => ({
    toggleButton: () => setActive(!isActive)
  }))

  return isActive ? <div ref={ref}>child component</div> : null;
});
