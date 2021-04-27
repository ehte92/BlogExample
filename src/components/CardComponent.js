import React from "react";
import moment from "moment";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
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
import { blogData } from "../data/blog";
import "./style.scss";

function CardComponent(props) {
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
      <div className="container">
        <div className="post" onClick={handleClickOpen("paper")}>
          <div className="header_post">
            <img src={data[0].image} alt="" />
          </div>

          <div className="body_post">
            <div className="post_content">
              <h1>{data[0].title}</h1>
              <p>{data[0].description}</p>

              <div className="container_infos">
                <div className="postedBy">
                  <span>
                    <AccessTimeIcon className="mr-1" />
                    {data[0].date}
                  </span>
                  <span>
                    <VisibilityIcon className="mr-1" />
                    {data[0].views}
                  </span>
                </div>

                <div className="container_tags">
                  <span>tags</span>
                  <div className="tags">
                    <ul>
                      <li>{data[0].category}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">{data[0].title}</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <div>
              <AccessTimeIcon />
              <span className="ml-2">
                {moment(data[0].date).format("MMM DD,YYYY")}
              </span>
              <div className="inline float-right">
                <VisibilityIcon />
                <span className="ml-2">{data[0].views}</span>
              </div>
            </div>
            <div class="flex h-auto mb-5">
              <div class="m-auto">
                <ImageShadow src={data[0].image} alt="" />
              </div>
            </div>
            <Divider variant="middle" className="m-auto" />
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {data[0].content}
            </DialogContentText>
            <div className="float-right">
              <LocalOfferIcon />
              <span className="ml-2">{data[0].category}</span>
            </div>
          </DialogContent>
          <DialogActions>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default CardComponent;
