import Feedback from "components/Feedback/Feedback";
import React from "react";
import { VERSION } from "utils/constants";
import VersionNotes from "components/VersionNotes";
import useStyles from "./Footer.styles";

export default function Footer(): JSX.Element {
  const classes = useStyles();

  const [showVersionNotes, setShowVersionNotes] = React.useState<boolean>(
    false
  );
  const [showFeedback, setShowFeedback] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <footer className={classes.root}>
        <small>
          fusliez notes{" "}
          <a
            href="https://github.com/Kedyn/fusliez-notes/releases/latest"
            onClick={(
              event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
              event.preventDefault();

              setShowVersionNotes(true);
            }}
          >
            {VERSION}
          </a>{" "}
          made with &#10084; by the{" "}
          <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
            fuslie fam
          </a>
          . <a onClick={() => setShowFeedback(true)}>Feedback</a>
        </small>
      </footer>

      <VersionNotes
        show={showVersionNotes}
        onClose={() => setShowVersionNotes(false)}
      />
      <Feedback show={showFeedback} onClose={() => setShowFeedback(false)} />
    </React.Fragment>
  );
}