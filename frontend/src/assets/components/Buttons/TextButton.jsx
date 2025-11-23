import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

export default function TextButtons({ buttonText, buttonURLPath }) {
  return (
    <Stack direction="column" spacing={2}>
      <Link to={buttonURLPath}>
        <Button type="button">{buttonText}</Button>
      </Link>
    </Stack>
  );
}
