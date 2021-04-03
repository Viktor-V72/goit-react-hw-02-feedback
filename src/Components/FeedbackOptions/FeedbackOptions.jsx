import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => {
      const id = shortid.generate();
      return (
        <button
          key={id}
          type="button"
          onClick={onLeaveFeedback}
          className={styles.button}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
