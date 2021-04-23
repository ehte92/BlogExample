import React from "react";
import moment from "moment";
import { faEye, faTags, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 text-center">
            <div className="h-full float-left mr-5 max-w-1/2 px-4 py-6 rounded-md border-2 border-green-500 transform transition duration-500 hover:scale-110">
              <div className="text-base">{moment(data[0].date).year()}</div>
              <h2>{moment(data[0].date).format("MMM DD")}</h2>
              <div
                className="w-full h-40 bg-no-repeat bg-contain bg-center "
                style={{ backgroundImage: `url('${data[0].image}')` }}
              ></div>
              <div className="text-xs mt-4">
                <FontAwesomeIcon icon={faTags} />
                <span className="ml-4">{data[0].category}</span>
              </div>
              <h5>{data[0].title}</h5>
              <div className="text-xs text-justify">{data[0].description}</div>
              <div className="text-xs mt-4">
                <FontAwesomeIcon icon={faEye} />
                <span className="ml-4">{data[0].views}</span>
              </div>
              <button
                onClick={handleClickOpen("paper")}
                className="btn btn-block text-gray-600 rounded-lg bg-white text-xs font-bold mt-4 p-2 border-2 border-green-500"
              >
                Read Bulletin
              </button>
            </div>
          </div>
        </div>
      </section>

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
              <FontAwesomeIcon icon={faClock} />
              <span className="ml-2">
                {moment(data[0].date).format("MMM DD,YYYY")}
              </span>
              <div className="inline float-right">
                <FontAwesomeIcon icon={faEye} />
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
              <FontAwesomeIcon icon={faTags} />
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
