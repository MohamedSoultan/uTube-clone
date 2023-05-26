import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

// export const selectedCat = "New";

const Sidebar = ({ setSelectedCat, selectedCat }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat) => (
      <button
        onClick={() => setSelectedCat(cat.name)}
        className="category-btn"
        style={{
          background: cat.name === selectedCat && "#FC1503",
          color: "white",
        }}
        key={cat.name}
      >
        {" "}
        <span
          style={{
            color: cat.name === selectedCat ? "white" : "red",
          }}
        >
          {cat.icon}
        </span>
        <span style={{ opacity: cat.name === selectedCat ? "1" : "0.8" }}>
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
