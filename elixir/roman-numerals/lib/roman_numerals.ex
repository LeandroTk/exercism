defmodule RomanNumerals do
  @digit_to_roman %{
    "0" => "",
    "1" => "I",
    "2" => "II",
    "3" => "III",
    "4" => "IV",
    "5" => "V",
    "6" => "VI",
    "7" => "VII",
    "8" => "VIII",
    "9" => "IX"
  }

  @dozens_to_roman %{
    "0" => "",
    "1" => "X",
    "2" => "XX",
    "3" => "XXX",
    "4" => "XL",
    "5" => "L",
    "6" => "LX",
    "7" => "LXX",
    "8" => "LXXX",
    "9" => "XC"
  }

  @hundreds_to_roman %{
    "0" => "",
    "1" => "C",
    "2" => "CC",
    "3" => "CCC",
    "4" => "CD",
    "5" => "D",
    "6" => "DC",
    "7" => "DCC",
    "8" => "DCCC",
    "9" => "CM"
  }

  @thousands_to_roman %{
    "0" => "",
    "1" => "M",
    "2" => "MM",
    "3" => "MMM",
    "4" => "MMMM"
  }

  def numeral(number) do
    number
    |> Integer.to_string()
    |> String.reverse()
    |> String.split("", trim: true)
    |> Enum.with_index()
    |> Enum.reduce("", &build_roman_numeral/2)
  end

  defp build_roman_numeral({string_digit, index}, roman) do
    to_roman(string_digit, index) <> roman
  end

  defp to_roman(digit, index) do
    case index do
      0 ->
        @digit_to_roman[digit]
      1 ->
        @dozens_to_roman[digit]
      2 ->
        @hundreds_to_roman[digit]
      3 ->
        @thousands_to_roman[digit]
    end
  end
end
