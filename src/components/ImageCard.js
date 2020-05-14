import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    console.log(this.props.keyId);

    this.setState({ spans });
  };

  render() {
    const { description, urls, id } = this.props.image;
    return (
      <div
        className=" p-6 "
        style={{ gridRowEnd: `span ${this.state.spans}`, overflow: "hidden" }}
      >
        <img
          key={this.props.keyId}
          className="transition duration-500 ease-in-out bg-blue-500 transform shadow-regular hover:-translate-y-2 hover:shadow-imageHover"
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        ></img>
      </div>
    );
  }
}

export default ImageCard;