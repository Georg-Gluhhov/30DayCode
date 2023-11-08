using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;



class Solution
{
    public static void Main(string[] args)
    {
      int number = Convert.ToInt32(Console.ReadLine());

        if (number % 2 == 0)
        {
            if (number >= 2 && number <= 5)
            {
                Console.WriteLine("Not Weird");
            }
            else if (number >= 6 && number <= 20)
            {
                Console.WriteLine("Weird");
            }
            else
            {
                Console.WriteLine("Not Weird");
            }
        }
        else
        {
            Console.WriteLine("Weird");
        }
            }
        }
