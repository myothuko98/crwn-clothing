import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionForPreveiew,
} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreveiew,
});

export default connect(mapStateToProps)(CollectionsOverview);
