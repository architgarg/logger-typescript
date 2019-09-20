export class Logger {

  // Demo for the medium blog.

  static configure(production) {
    (window as any).logger = {
      log: (log) => {
        if (production) {
          return;
        }

        Logger.log(log, null, null);
      },
      prod: (log) => {
        Logger.log(log, null, null);
      },
      error: (log) => {
        if (production) {
          return;
        }

        Logger.error(log);
      },
      large: (log) => {
        if (production) {
          return;
        }

        Logger.log(log, null, "20px");
      },
      red: (log) => {
        if (production) {
          return;
        }

        Logger.log(log, "rgba(255, 0, 0, 0.20)", null);
      },
      blue: (log) => {
        if (production) {
          return;
        }

        Logger.log(log, "rgba(0, 0, 255, 0.20)", null);
      },
      yellow: (log) => {
        if (production) {
          return;
        }

        Logger.log(log, "rgba(255, 255, 0, 0.40)", null);
      },
      green: (log) => {
        if (production) {
          return;
        }

        Logger.log(log, "rgba(0, 128, 0, 0.20)", null);
      }
    };
  }

  private static processLog(log) {
    if (log instanceof Object) {
      try {
        log = JSON.stringify(log, null, 2);
      } catch (e) {
        // do nothing
      }
    }

    return log;
  }

  private static log(log, color, size) {
    log = Logger.processLog(log);

    if (typeof log === "string") {
      console.log("%c" + log, `background-color: ${color}; font-size: ${size}`);
    } else {
      console.log(log);
    }
  }


  private static error(log) {
    log = Logger.processLog(log);
    console.error(log);
  }
}
