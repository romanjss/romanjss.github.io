// ConsoleApplication6.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include "pch.h"
#include <iostream>

using namespace std;
//Compiler version g++ 6.3.0

int main()

{
	int max = 0, del = 1;
	int a, b;

	cin >> a >> b;
	for (int i = 1; ((i < a) && (i < b)); i++)
	{
		if (a%i == 0 && b%i == 0) {
			del = i;
		}
		if (max < del) {
			max = del;
		}
	}
	cout << max;
}

