import matplotlib.pyplot as plt
import pandas as pd

data={'xvalues':[1,2,3,4,5,6,7,8,9]}
df=pd.DataFrame(data)
df['yvalues']=df['xvalues']**2
df['secondyvalues']=df['xvalues']+10

fig, ax = plt.subplots()

plt.xlim(0,110)
plt.ylim(0,110)
plt.grid(True)
plt.annotate('D', xy = (95, 100))

def setlabels():
    print("1. Set Title")
    print("2. Set xlabel")
    print("3. Set ylabel")
    print("4. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            title = input("Title: ")
            plt.title(title)
        elif choice == 2:
            xlabel = input("xlabel: ")
            plt.xlabel(xlabel)
        elif choice == 3:
            ylabel = input("ylabel: ")
            plt.ylabel(ylabel)
        elif choice == 4:
            break
        else:
            print("Wrong choice")

def drawline():
    print("1. Draw line")
    print("2. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            xrange = [int(input()), int(input())]
            yrange = [int(input()), int(input())]
            ax.plot(xrange, yrange, color='b')
        elif choice == 2:
            break
        else:
            print("Wrong choice")

def writetext():
    print("1. Write text")
    print("2. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            x = int(input("x: "))
            y = int(input("y: "))
            text = input("text: ")
            ax.annotate(text, xy=(x, y))
        elif choice == 2:
            break
        else:
            print("Wrong choice")

def drawdashline():
    print("1. Draw dashed line")
    print("2. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            xrange = [int(input()), int(input())]
            yrange = [int(input()), int(input())]
            ax.plot(xrange, yrange, color='b', linestyle='--')
        elif choice == 2:
            break
        else:
            print("Wrong choice")

def drawarrow():
    print("1. Draw arrow")
    print("2. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            x = int(input("x: "))
            y = int(input("y: "))
            ax.annotate('', xy=(x, y), xytext=(x-5, y-5), arrowprops=dict(arrowstyle="->"))
        elif choice == 2:
            break
        else:
            print("Wrong choice")

def print():
    print("1. Print graph")
    print("2. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            plt.show()
        elif choice == 2:
            break
        else:
            print("Wrong choice")

def save():
    print("1. Save graph")
    print("2. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            name = input("Saved name: ")
            fig.savefig(f'{name}.png')
        elif choice == 2:
            break
        else:
            print("Wrong choice")

ax.plot([0,100],[0,100],color='tab:grey')

def draw():
    print("1. Set labels")
    print("2. Draw line")
    print("3. Write text")
    print("4. Draw dashed line")
    print("5. Draw arrow")
    print("6. Print graph")
    print("7. Save graph")
    print("8. Exit")
    while True:
        choice = int(input("Enter your choice: "))
        if choice == 1:
            setlabels()
        elif choice == 2:
            drawline()
        elif choice == 3:
            writetext()
        elif choice == 4:
            drawdashline()
        elif choice == 5:
            drawarrow()
        elif choice == 6:
            print()
        elif choice == 7:
            save()
        elif choice == 8:
            break
        else:
            print("Wrong choice")

draw()