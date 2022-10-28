import { OverlayView } from "@react-google-maps/api";
import { DropOffMarker, PickUpMarker } from "../../Icons";

const Marker = ({ position, type }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      {type === "pickup" ? (
        <PickUpMarker />
      ) : (
        type === "dropoff" && <DropOffMarker />
      )}
    </OverlayView>
  );
};

export default Marker;
