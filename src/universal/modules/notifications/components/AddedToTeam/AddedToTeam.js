import PropTypes from 'prop-types';
import React from 'react';
import Row from 'universal/components/Row/Row';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import defaultStyles from 'universal/modules/notifications/helpers/styles';
import {cashay} from 'cashay';
import ui from 'universal/styles/ui';
import Button from 'universal/components/Button/Button';
import IconAvatar from 'universal/components/IconAvatar/IconAvatar';

const AddedToTeam = (props) => {
  const {
    styles,
    notification
  } = props;
  const {id: notificationId, teamName} = notification;
  const acknowledge = () => {
    const variables = {notificationId};
    cashay.mutate('clearNotification', {variables});
  };
  return (
    <Row>
      <div className={css(styles.icon)}>
        <IconAvatar icon="users" size="medium" />
      </div>
      <div className={css(styles.message)}>
        Congratulations! You are now a part of the team
        <span className={css(styles.messageVar)}> {teamName}!</span>
      </div>
      <div className={css(styles.button)}>
        <Button
          colorPalette="cool"
          isBlock
          label="Great!"
          size={ui.notificationButtonSize}
          type="submit"
          onClick={acknowledge}
        />
      </div>
    </Row>
  );
};

AddedToTeam.propTypes = {
  styles: PropTypes.object,
  notification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired
  })
};

const styleThunk = () => ({
  ...defaultStyles,

  button: {
    marginLeft: ui.rowGutter,
    minWidth: '3.5rem'
  }
});

export default withStyles(styleThunk)(AddedToTeam);
