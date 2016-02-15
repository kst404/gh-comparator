import ReactLink from 'react/lib/ReactLink';
import ReactStateSetter from 'react/lib/ReactStateSetters';

/**
 * Extracted the linkedState implementation to its own function (instead of a mixin)
 *
 * @params {ReactElement} ctx The component's `this`
 * @params {str} key State key to be updated
 * @return ReactLink
 */
export default function(ctx, key) {
  return new ReactLink(
    ctx.state[key],
    ReactStateSetter.createStateKeySetter(ctx, key)
  );
}
