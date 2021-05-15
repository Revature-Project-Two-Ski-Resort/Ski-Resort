import logging


class MyLog:
    logging.basicConfig(level=logging.DEBUG, filename='ski.log', filemode='a',
                        format='%(asctime)s : %(name)-12s| %(levelname)-12s| %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')
    formatter = logging.Formatter("%(name)-20s: %(levelname)-12s| %(message)s")
    # Log Levels: Info, Warning, Error, Critical, Debug, etc...
    # Handlers are used to better manage where a logger will log to.
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(formatter)
    # adds the root to the logger location
    logger = logging.getLogger('')
    logger.addHandler(console_handler)

    @staticmethod
    def debug_log(message=None, name=""):
        my_debug_log = logging.getLogger(name)
        my_debug_log.debug(message)

    @staticmethod
    def info_log(message=None, name=""):
        my_info_log = logging.getLogger(name)
        my_info_log.info(message)

    @staticmethod
    def warning_log(message=None, name=""):
        my_warning_log = logging.getLogger(name)
        my_warning_log.warning(message)

    @staticmethod
    def error_log(message=None, name=""):
        my_error_log = logging.getLogger(name)
        my_error_log.error(message)

    @staticmethod
    def critical_log(message=None, name=""):
        my_critical_log = logging.getLogger(name)
        my_critical_log.critical(message)


def _test():
    MyLog().debug_log(message="The test log was successful!", name="_test()")
    MyLog().info_log(message="The test log was successful!", name="_test()")
    MyLog().warning_log(message="The test log was successful!", name="_test()")
    MyLog().error_log(message="The test log was successful!", name="_test()")
    MyLog().critical_log(message="The test log was successful!", name="_test()")


if __name__ == '__main__':
    _test()
