'use strict';

/**
 * @ngdoc service
 * @name crossoverCiDashboardApp.BuildData
 * @description
 * # BuildData
 * Factory in the crossoverCiDashboardApp.
 */
angular.module('crossoverCiDashboardApp')
  .factory('BuildData', function () {
  var failedBuild = {
    'type': 'build',
    'id': '5842dcff8891396ff1e3a7f7',
    'owner': {
      'userName': 'njohn'
    },
    'start': 'Tue Feb 02 2016 02:54:43 GMT+0000 (UTC)',
    'metrics': {
      'status': {
        'label': 'Fail',
        'key': 'fail'
      },
      'workmanship': {
        'trend': 'down',
        'val': 39,
        'status': {
          'label': 'Fail',
          'key': 'fail'
        }
      },
      'security': {
        'trend': null,
        'val': null,
        'status': {
          'label': null,
          'key': null
        }
      },
      'maintainability': {
        'trend': 'equal',
        'val': 80,
        'status': {
          'label': 'Equal',
          'key': 'equal'
        }
      },
      'test': {
        'trend': 'up',
        'val': 62,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      }
    },
    'build': {
      'release': {
        'status': 'pending'
      },
      'debug': {
        'status': 'pending'
      },
      'status': {
          'label': 'Pending',
          'key': 'pending'
        }
    },
    'unitTest': {
      'tests': {
        'pass': null,
        'total': null
      },
      'coverage': null,
      'status': {
        'key': 'pending',
        'label': 'Pending'
      }
    },
    'functionalTest': {
      'tests': {
        'pass': null,
        'total': null
      },
      'coverage': null,
      'status': {
        'key': 'pending',
        'label': 'Pending'
      }
    },
    'result': {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'metrics_reduction',
        'label': 'Metrics Reduction'
      },
      'status': {
        'short': 'fail',
        'key': 'change_rejected',
        'label': 'Change Rejected'
      }
    }
  };
  var passBuild =   {
    'type': 'build',
    'id': '5842dcffed2d17b7511bf8cc',
    'owner': {
      'userName': 'tpriy'
    },
    'start': 'Fri Nov 04 2016 11:04:37 GMT+0000 (UTC)',
    'metrics': {
      'status': {
        'label': 'Pass',
        'key': 'pass',
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'workmanship': {
        'trend': 'equal',
        'val': 69,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'security': {
        'trend': 'up',
        'val': 38,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'maintainability': {
        'trend': 'up',
        'val': 40,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'test': {
        'trend': 'up',
        'val': 82,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      }
    },
    'build': {
      'release': {
        'status': 'pass'
      },
      'debug': {
        'status': 'pass'
      },
      'status': {
          'label': 'Pending',
          'key': 'pending'
        }
    },
    'unitTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'functionalTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'result': {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'auto_merged',
        'label': 'Auto-Merged'
      },
      'status': {
        'short': 'accepted',
        'key': 'change_accepted',
        'label': 'Change Accepted'
      }
    },
  };
  var pendingBuild =   {
    'type': 'build',
    'id': '5842dcffed2d17b7511bf8cc',
    'owner': {
      'userName': 'tpriy'
    },
    'start': 'Fri Nov 04 2016 11:04:37 GMT+0000 (UTC)',
    'metrics': {
      'status': {
        'label': 'Pass',
        'key': 'pass',
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'workmanship': {
        'trend': 'equal',
        'val': 69,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'security': {
        'trend': 'up',
        'val': 38,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'maintainability': {
        'trend': 'up',
        'val': 40,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'test': {
        'trend': 'up',
        'val': 82,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      }
    },
    'build': {
      'release': {
        'status': 'pass'
      },
      'debug': {
        'status': 'pass'
      },
      'status': {
          'label': 'Pending',
          'key': 'pending'
        }
    },
    'unitTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'functionalTest': {
      'tests': {
        'pass': null,
        'total': null
      },
      'coverage': null,
      'status': {
        'key': 'pending',
        'label': 'Pass'
      }
    },
    'result': {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'auto_merged',
        'label': 'Auto-Merged'
      },
      'status': {
        'short': 'accepted',
        'key': 'change_accepted',
        'label': 'Change Accepted'
      }
    },
  };
  


  var failedCl =   {
    'result': {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'auto_merged',
        'label': 'Auto-Merged'
      },
      'status': {
        'short': 'accepted',
        'key': 'change_accepted',
        'label': 'Change Accepted'
      }
    },
    'functionalTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'unitTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'build': {
      'release': {
        'status': 'fail'
      },
      'debug': {
        'status': 'fail'
      },
      'status': {
          'label': 'Pending',
          'key': 'pending'
        }
    },
    'metrics': {
      'status': {
        'label': 'Pass',
        'key': 'pass'
      },
      'workmanship': {
        'trend': 'down',
        'val': 97,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'security': {
        'trend': 'equal',
        'val': 60,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'maintainability': {
        'trend': 'up',
        'val': 63,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'test': {
        'trend': 'equal',
        'val': 93,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      }
    },
    'start': 'Thu Jun 09 2016 18:03:17 GMT+0000 (UTC)',
    'owner': {
      'userName': 'gmenon'
    },
    'id': '5842dcff2ed90090b59cb2cd',
    'type': 'build'
  };
  var passCl =   {
    'result': {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'auto_merged',
        'label': 'Auto-Merged'
      },
      'status': {
        'short': 'accepted',
        'key': 'change_accepted',
        'label': 'Change Accepted'
      }
    },
    'functionalTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'unitTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'build': {
      'release': {
        'status': 'fail'
      },
      'debug': {
        'status': 'pass'
      },
      'status': {
          'label': 'Pending',
          'key': 'pending'
        }
    },
    'metrics': {
      'status': {
        'label': 'Pass',
        'key': 'pass'
      },
      'workmanship': {
        'trend': 'down',
        'val': 97,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'security': {
        'trend': 'equal',
        'val': 60,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'maintainability': {
        'trend': 'up',
        'val': 63,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'test': {
        'trend': 'equal',
        'val': 93,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      }
    },
    'start': 'Sat Aug 27 2016 01:58:59 GMT+0000 (UTC)',
    'owner': {
      'userName': 'adeep'
    },
    'id': '5842dcff57a5316e0b526262',
    'type': 'build'
  };
  var pendingCl =   {
    'result': {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'auto_merged',
        'label': 'Auto-Merged'
      },
      'status': {
        'short': 'accepted',
        'key': 'change_accepted',
        'label': 'Change Accepted'
      }
    },
    'functionalTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'unitTest': {
      'tests': {
        'pass': 800,
        'total': 1000
      },
      'coverage': 23,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    },
    'build': {
      'release': {
        'status': 'pass'
      },
      'debug': {
        'status': 'fail'
      },
      'status': {
          'label': 'Pending',
          'key': 'pending'
        }
    },
    'metrics': {
      'status': {
        'label': 'Pass',
        'key': 'pass'
      },
      'workmanship': {
        'trend': 'down',
        'val': 97,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'security': {
        'trend': 'equal',
        'val': 60,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'maintainability': {
        'trend': 'up',
        'val': 63,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      },
      'test': {
        'trend': 'equal',
        'val': 93,
        'status': {
          'label': 'Pass',
          'key': 'pass'
        }
      }
    },
    'start': 'Fri Sep 02 2016 21:52:19 GMT+0000 (UTC)',
    'owner': {
      'userName': 'tpriy'
    },
    'id': '5842dcff80de13f4b192ad62',
    'type': 'build'
  };

  var data = [failedBuild, passBuild, pendingBuild, failedCl, passCl, pendingCl];

    // Public API here
    return {
      getData: function () {
        return data;
      }
    };
  });
