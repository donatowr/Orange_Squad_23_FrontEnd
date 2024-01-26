import "./style.css";
import localImage from "../images/Logo_orange.png";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import StarOutline from "@mui/icons-material/StarSharp";
import Stack from "@mui/material/Stack";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import localImagePhoto from "../images/Image.png";

const Project = () => (
  <>
    <header>
      <nav>
        <Image className="logo" src={localImage} />
        <div className="links">
          <a href="http://localhost:3000/">Meus projetos</a>
          <a href="">Descobrir</a>
        </div>
      </nav>

      <Stack direction="row" spacing={0}>
        <div>
           
        </div>

        <div>
          <>
            <IconButton className="notificacao" color="#FFFFFF" size="medium">
              <NotificationsActiveIcon />
            </IconButton>
          </>
        </div>

        <div>
          <>
            <IconButton color="inherit" size="medium">
              <StarOutline />
            </IconButton>
          </>
        </div>
      </Stack>
    </header>
  </>
);
export default Project;
