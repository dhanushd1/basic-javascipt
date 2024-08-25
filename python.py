import random
import pyautogui as pg
import time

words=('donkey','monkey')
time.sleep(1)

for i in range(10):
    a=random.choice(words)
    pg.write("you are a "+a)
    pg.press('enter')