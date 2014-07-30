(function() {
/* global define accounting */
  define('accounting', [], function() {
    'use strict';

    return accounting;
  });

/* global define moment */
  define('moment', [], function() {
    'use strict';

    moment.lang('es');

    return {
      'default': moment
    };
  });

  /* global define chart */
  define('chart', [], function() {
    'use strict';

    return {
      'default': Chart
    };
  });
})();
