defmodule WordCount do
  def count(sentence) do
    sentence
    |> String.downcase
    |> split_by_special_chars
    |> build_counter
  end

  defp split_by_special_chars(string) do
    String.split(string, ~r/[^[:alnum:]-]/u, trim: true)    
  end

  defp build_counter(strings) do
    Enum.reduce(strings, %{}, &update_counter/2)
  end

  defp update_counter(string, counter) do
    Map.update(
      counter,
      string, 1,
      &increment_counter/1
    )
  end

  defp increment_counter(string_counter) do
    string_counter + 1
  end
end
