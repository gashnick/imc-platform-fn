"use client";

interface ColorSelectorProps {
    colors: string[];
    selectedColor: string;
    onColorSelect: (color: string) => void;
}

export function ColorSelector({ colors, selectedColor, onColorSelect }: ColorSelectorProps) {
    return (
        <div>
            <h3 className="text-sm font-medium mb-2 text-logoBlue">Choose a Color</h3>
            <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => onColorSelect(color)}
                        className={`w-8 h-8 rounded-full ${selectedColor === color ? "ring-2 ring-blue-500 ring-offset-2" : ""
                            }`}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    );
}