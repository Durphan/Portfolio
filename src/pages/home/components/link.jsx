import Typography from "@mui/material/Typography";
export const Link = ({ labelLink, link }) => {
  return (
    <>
      <a href={link} style={{ textDecoration: `none` }}>
        <Typography variant="p" color="#6885EF">
          {labelLink}
        </Typography>
      </a>
    </>
  );
};
