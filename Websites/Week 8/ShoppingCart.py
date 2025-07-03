# Initialize an empty shopping cart
cart = []

while True:
    print("\n--- Shopping Cart Menu ---")
    print("1. Add item")
    print("2. View cart")
    print("3. Remove item")
    print("4. Clear cart")
    print("5. Exit")

    choice = input("Enter your choice (1-5): ")

    if choice == "1":
        item = input("Enter the item to add: ")
        cart.append(item)
        print(f"{item} has been added to the cart.")

    elif choice == "2":
        if not cart:
            print("Your cart is empty.")
        else:
            print("Items in your cart:")
            for index, item in enumerate(cart, start=1):
                print(f"{index}. {item}")

    elif choice == "3":
        if not cart:
            print("Your cart is empty.")
        else:
            print("Items in your cart:")
            for index, item in enumerate(cart, start=1):
                print(f"{index}. {item}")
            remove_item = input("Enter the name of the item to remove: ")
            if remove_item in cart:
                cart.remove(remove_item)
                print(f"{remove_item} has been removed.")
            else:
                print(f"{remove_item} not found in cart.")

    elif choice == "4":
        cart.clear()
        print("Cart has been cleared.")

    elif choice == "5":
        print("Thank you for shopping. Goodbye!")
        break

    else:
        print("Invalid choice. Please enter a number between 1 and 5.")


