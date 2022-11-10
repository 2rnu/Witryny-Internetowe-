using System;

namespace MoveOnBoardGame
{
    class Board
    {
        private int height = 20;
        private int width = 20;
        private ConsoleColor backgroundColor = ConsoleColor.DarkRed;
        private ConsoleColor foregroundColor = ConsoleColor.Yellow;
        private string borderChar;

        private char = ' ';

            public Board()
        {

        }
        public void Draw()
        {
            Console.Clear();

            Console.ForegroundColor = foregroundColor;
            Console.BackgroundColor = backGroundColor;

            for(int i = 0; i < width; i++)
            {
                Console.Write(borderChar);
            }

            for(int i = 1; i <height-1; i++)
            {
                Console.SetCursorPosition(0, i);
                Console.Write(borderChar);

                Console.SetCursorPosition(-1, i);
                Console.Write(borderChar);
            }
        }
    }

}
