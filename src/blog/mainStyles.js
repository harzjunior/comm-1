import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));