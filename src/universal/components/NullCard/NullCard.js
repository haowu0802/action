import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import {Ellipsis, Type} from 'universal/components';
import CreateCardRootStyles from '../CreateCard/CreateCardRootStyles';
import makeUsername from 'universal/utils/makeUsername';

const NullCard = (props) => {
  const {styles, preferredName} = props;
  const username = makeUsername(preferredName);
  return (
    <div className={css(styles.root)}>
      <Type align="center" bold scale="s3" colorPalette="mid">
        {'@'}{username}<br />{'is adding a Task'}<Ellipsis />
      </Type>
    </div>
  );
};

NullCard.propTypes = {
  styles: PropTypes.object,
  preferredName: PropTypes.string
};

const styleThunk = () => ({
  root: {
    ...CreateCardRootStyles,
    border: 0
  }
});

export default withStyles(styleThunk)(NullCard);
