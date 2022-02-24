from selenium import webdriver
from bs4 import BeautifulSoup
import time

URL = "https://www.tripadvisor.com/Airline_Review-d8729157-Reviews-Spirit-Airlines#REVIEWS"

options = webdriver.ChromeOptions()
# OPTIONS
options.add_argument('--headless')
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')

browser = webdriver.Chrome(options=options)
browser.get(URL)

imageStore = []
images = browser.find_elements(by="tag name", value="img")
for image in images:
    if image.get_attribute('src') is None: continue
    if image.get_attribute('src') is not None:
        imageStore.append(image.get_attribute('src'))
        time.sleep(1)
page_source = browser.page_source
browser.quit()

print(imageStore)

#soup = BeautifulSoup(page_source, 'lxml')
#print(soup.prettify())
