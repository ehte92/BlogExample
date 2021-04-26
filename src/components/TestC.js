import React from "react";
import "./style.scss";
import "../jquery-loader";
import { blogData } from "../data/blog";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";
import Navbar from "./Navbar/Navbar";

function TestC(props) {
  const { id } = props;
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const data = blogData.filter((el) => el.id === id);
  return (
    <>
      <Navbar />
      <OwlCarousel className="owl-theme" margin={10} nav>
        {blogData.map((data, index) => (
          <div key={index} className="container">
            <div className="post">
              <div className="header_post">
                <img src={data.image} alt="" />
              </div>

              <div className="body_post">
                <div className="post_content">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>

                  <div className="container_infos">
                    <div className="postedBy">
                      <span>
                        <AccessTimeIcon className="mr-1" />
                        {data.date}
                      </span>
                      <span>
                        <VisibilityIcon className="mr-1" />
                        {data.views}
                      </span>
                    </div>

                    <div className="container_tags">
                      <span>tags</span>
                      <div className="tags">
                        <ul>
                          <li>{data.category}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}

export default TestC;
