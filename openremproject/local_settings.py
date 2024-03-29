# LOCAL_SETTINGS = True
from .settings import *


# Choose your database and fill in the details below. If testing, you
# can use the sqlite3 database as it doesn't require any further configuration
# A Windows example path might be: 'C:/Users/myusername/Documents/OpenREM/openrem.db'
# Note, forward slashes are used in the config files, even for Windows.

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',  # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'C:/Python38/openrem_dev/Lib/site-packages/openrem/openrem/openrem.db', # Or path to database file if using sqlite3.
        'USER': '',                              # Not used with sqlite3.
        'PASSWORD': '',                          # Not used with sqlite3.
        'HOST': '',                              # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                              # Set to empty string for default. Not used with sqlite3.
    }
}


# Absolute filesystem path to the directory that will hold xlsx and csv
# exports patient size import files
# Linux example: "/var/openrem/media/"
# Windows example: "C:/Users/myusername/Documents/OpenREM/media/"
MEDIA_ROOT = 'C:/temp/openrem_dev/media'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = ''
JS_REVERSE_OUTPUT_PATH = os.path.join(STATIC_ROOT, 'js', 'django_reverse')

# You should generate a new secret key. Make this unique, and don't
# share it with anybody. See the docs.
SECRET_KEY = 'hmj#)-$smzqk*=wuz9^a46rex30^$_j$rghp+1#y&amp;i+pys5b@$'

# Debug mode is now set to False by default. If you need to troubleshoot, can turn it back on here:
# DEBUG = True

# Set the domain name that people will use to access your OpenREM server.
# This is required if the DEBUG mode is set to False (default)
# Example: '.doseserver.' or '10.23.123.123'. A dot before a name allows subdomains, a dot after allows for FQDN eg
# doseserver.ad.trust.nhs.uk. Alternatively, use '*' to remove this security feature if you handle it in other ways.
ALLOWED_HOSTS = [
    '*',
]

# If running OpenREM in a virtual directory specify the virtual directory here.
# Eg. if OpenREM is in a virtual directory TST (http://server/TST), specify 'TST/' below.
# LOGIN_URL (always) should be overridden to include the VIRTUAL_DIRECTORY
VIRTUAL_DIRECTORY = ''

# Date format for exporting data to Excel xlsx files.
# Default in OpenREM is dd/mm/yyyy. Override it by uncommenting and customising below; a full list of codes is available
# at https://msdn.microsoft.com/en-us/library/ee634398.aspx.
# XLSX_DATE = 'mm/dd/yyyy'

# Logging configuration
# Set the log file location. The example places the log file in the media directory. Change as required - on linux
# systems you might put these in a subdirectory of /var/log/. If you want all the logs in one file, set the filename
# to be the same for each one.
import os
LOG_ROOT = MEDIA_ROOT
logfilename = os.path.join(LOG_ROOT, "openrem.log")
qrfilename = os.path.join(LOG_ROOT, "openrem_qr.log")
storefilename = os.path.join(LOG_ROOT, "openrem_store.log")
extractorfilename = os.path.join(LOG_ROOT, "openrem_extractor.log")

LOGGING['handlers']['file']['filename'] = logfilename          # General logs
LOGGING['handlers']['qr_file']['filename'] = qrfilename        # Query Retrieve SCU logs
LOGGING['handlers']['store_file']['filename'] = storefilename  # Store SCP logs
LOGGING['handlers']['extractor_file']['filename'] = extractorfilename  # Extractor logs

# Set log message format. Options are 'verbose' or 'simple'. Recommend leaving as 'verbose'.
LOGGING['handlers']['file']['formatter'] = 'verbose'        # General logs
LOGGING['handlers']['qr_file']['formatter'] = 'verbose'     # Query Retrieve SCU logs
LOGGING['handlers']['store_file']['formatter'] = 'verbose'  # Store SCP logs
LOGGING['handlers']['extractor_file']['formatter'] = 'verbose'  # Extractor logs

# Set the log level. Options are 'DEBUG', 'INFO', 'WARNING', 'ERROR', and 'CRITICAL', with progressively less logging.
LOGGING['loggers']['remapp']['level'] = 'INFO'                    # General logs
LOGGING['loggers']['remapp.netdicom.qrscu']['level'] = 'INFO'     # Query Retrieve SCU logs
LOGGING['loggers']['remapp.netdicom.storescp']['level'] = 'INFO'  # Store SCP logs
LOGGING['loggers']['remapp.extractors.ct_toshiba']['level'] = 'INFO'  # Toshiba RDSR creation extractor logs

# Linux only for now: configure 'rotating' logs so they don't get too big. Remove the '# ' to uncomment. 'LOGGING'
# should be at the start of the line.
# LOGGING['handlers']['file']['class'] = 'logging.handlers.RotatingFileHandler'
# LOGGING['handlers']['file']['maxBytes'] = 10 * 1024 * 1024  # 10*1024*1024 = 10 MB
# LOGGING['handlers']['file']['backupCount'] = 5  # number of log files to keep before deleting the oldest one
# LOGGING['handlers']['qr_file']['class'] = 'logging.handlers.RotatingFileHandler'
# LOGGING['handlers']['qr_file']['maxBytes'] = 10 * 1024 * 1024  # 10*1024*1024 = 10 MB
# LOGGING['handlers']['qr_file']['backupCount'] = 5  # number of log files to keep before deleting the oldest one
# LOGGING['handlers']['store_file']['class'] = 'logging.handlers.RotatingFileHandler'
# LOGGING['handlers']['store_file']['maxBytes'] = 10 * 1024 * 1024  # 10*1024*1024 = 10 MB
# LOGGING['handlers']['store_file']['backupCount'] = 5  # number of log files to keep before deleting the oldest one
# LOGGING['handlers']['extractor_file']['class'] = 'logging.handlers.RotatingFileHandler'
# LOGGING['handlers']['extractor_file']['maxBytes'] = 10 * 1024 * 1024  # 10*1024*1024 = 10 MB
# LOGGING['handlers']['extractor_file']['backupCount'] = 5  # number of log files to keep before deleting the oldest one

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'Europe/London'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

# Locations of various tools for DICOM RDSR creation from CT images
DCMTK_PATH = 'C:\\Users\\David\\Apps\\dcmtk-3.6.0-win32-i386\\bin'
DCMCONV = os.path.join(DCMTK_PATH, 'dcmconv.exe')
DCMMKDIR = os.path.join(DCMTK_PATH, 'dcmmkdir.exe')
JAVA_EXE = 'C:\\Users\\David\\Apps\\doseUtility\\windows\\jre\\bin\\java.exe'
JAVA_OPTIONS = '-Xms256m -Xmx512m -Xss1m -cp'
PIXELMED_JAR = 'C:\\Users\\David\\Apps\\doseUtility\\pixelmed.jar'
PIXELMED_JAR_OPTIONS = '-Djava.awt.headless=true com.pixelmed.doseocr.OCR -'

# E-mail server settings - see https://docs.djangoproject.com/en/1.8/topics/email/
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_USE_TLS = False
EMAIL_USE_SSL = False
EMAIL_DOSE_ALERT_SENDER = 'your.alert@email.address'
EMAIL_OPENREM_URL = 'http://your.openrem.server'

# The following line can run on your OpenREM server to set up a dummy smtp server for testing:
# python -m smtpd -n -c DebuggingServer localhost:25

# Port that the Celery management software Flower runs on. Change if necessary to match how Flower is started.
# See https://docs.openrem.org/en/latest/startservices.html#celery-task-management-flower
FLOWER_PORT = 5555